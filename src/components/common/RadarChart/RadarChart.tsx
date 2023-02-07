import React, { Component } from 'react';
import copy from 'copy-to-clipboard';
import { isEqual } from 'lodash';
import { roundToTwoDecimals } from './utils';
import { Chart } from 'chart.js';
import 'chartjs-plugin-dragdata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faUndo } from '@fortawesome/pro-regular-svg-icons';
import './RadarChart.css';
import { feedbackStarters } from './data/feedback-starters';

class RadarChart extends Component {
  constructor(props) {
    super();
    const { labels, datasets } = props;
    console.log('props', props);
    this.state = { labels, datasets };
    this.createOptions = this.createOptions.bind(this);
    this.resetMyGrades = this.resetMyGrades.bind(this);
    this.copyFinalGrade = this.copyFinalGrade.bind(this);
    this.copyGradesByCategories = this.copyGradesByCategories.bind(this);
  }

  copyFinalGrade(grade) {
    copy(grade);
  }

  copyGradesByCategories(grades) {
    copy(
      feedbackStarters[
        Math.floor(Math.random() * (feedbackStarters.length - 1))
      ].replace('$1', grades.join('-')),
    );
  }

  createOptions() {
    return {
      type: 'radar',
      data: { ...this.state },
      options: {
        aspectRatio: 1,
        dragData: true,
        dragDataRound: 0,
        onDragEnd: (event, datasetIndex, index, value) =>
          this.setState((state) => {
            const newState = { ...state };
            newState.datasets[datasetIndex].data = [
              ...state.datasets[datasetIndex].data.slice(0, index),
              value,
              ...state.datasets[datasetIndex].data.slice(index + 1),
            ];
            return newState;
          }),
        layout: {
          padding: {
            left: 16,
            right: 16,
            top: 16,
            bottom: 16,
          },
        },
        legend: {
          display: false,
        },
        maintainAspectRatio: false,
        scale: {
          ticks: {
            max: 10,
            min: 0,
            stepSize: 1,
            fontSize: 13,
            fontStyle: 'bold',
            fontColor: '#999999',
          },
          pointLabels: {
            fontSize: 16,
            fontStyle: 'bold',
          },
        },
        scaleLabel: {
          display: false,
        },
        tooltips: {
          enabled: false,
        },
      },
    };
  }

  componentDidMount() {
    this.chart = new Chart(this.el.getContext('2d'), this.createOptions());
  }

  componentDidUpdate() {
    if (this.chart) {
      this.chart.update(this.createOptions());
    }
  }

  resetMyGrades() {
    this.setState((state) => {
      const newState = { ...state };
      newState.datasets[0].data = [...state.datasets[1].data];
      return newState;
    });
  }

  render() {
    const myGrades = this.state.datasets[0].data;
    const myGradesAverage =
      myGrades.reduce((memo, value) => (memo += value), 0) / myGrades.length;
    const defaultGrades = this.state.datasets[1].data;
    const areMyGradesDefault = isEqual(myGrades, defaultGrades);
    return (
      <div className="radar-chart">
        <canvas ref={(el) => (this.el = el)} />
        {!areMyGradesDefault && (
          <button className="reset-grades" onClick={this.resetMyGrades}>
            <FontAwesomeIcon icon={faUndo} className="icon" /> Reset
          </button>
        )}
        <button
          className="grades-by-categories"
          onClick={() => this.copyGradesByCategories(myGrades)}
        >
          <FontAwesomeIcon icon={faCopy} className="icon" />
        </button>
        <button
          className="final-grade"
          onClick={() =>
            this.copyFinalGrade(roundToTwoDecimals(myGradesAverage))
          }
        >
          {roundToTwoDecimals(myGradesAverage)}
          <FontAwesomeIcon icon={faCopy} className="icon" />
        </button>
      </div>
    );
  }
}

export default RadarChart;
