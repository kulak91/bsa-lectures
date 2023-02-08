import {
  volodymyrKushnir2017Avatar,
  romanSahan2017Avatar,
  alexandrTovmach2018Avatar,
  pavelNemchenko2017Avatar,
  rostyslavDiakiv2018Avatar,
  nikitaKrasnov2018Avatar,
  kyryloLesohorskyi2020Avatar,
  LenchVolodymyr2021Avatar,
  oleksandrDanylchenko2021Avatar,
  viktoriiaVasylenko2021Avatar,
  ivanHedz2023Avatar,
} from '~/assets/images/avatars/intro-rounded';
import { AuthorNames } from '~/enums';

const nameToImage = {
  [AuthorNames.VIKTORIIA_VASYLENKO_EN]: viktoriiaVasylenko2021Avatar,
  [AuthorNames.VIKTORIIA_VASYLENKO_UA]: viktoriiaVasylenko2021Avatar,
  [AuthorNames.VIKTORIIA_VASYLENKO_RU]: viktoriiaVasylenko2021Avatar,
  [AuthorNames.OLEKSANDR_DANYLCHENKO_UA]: oleksandrDanylchenko2021Avatar,
  [AuthorNames.OLEKSANDR_DANYLCHENKO_EN]: oleksandrDanylchenko2021Avatar,
  [AuthorNames.OLEKSANDR_DANYLCHENKO_RU]: oleksandrDanylchenko2021Avatar,
  [AuthorNames.ALEXANDR_TOVMACH]: alexandrTovmach2018Avatar,
  [AuthorNames.KYRYLO_LESOHORSKYI]: kyryloLesohorskyi2020Avatar,
  [AuthorNames.NIKITA_KRASNOV]: nikitaKrasnov2018Avatar,
  [AuthorNames.PAVEL_NEMCHENKO]: pavelNemchenko2017Avatar,
  [AuthorNames.VOLODYMYR_LENCH]: LenchVolodymyr2021Avatar,
  [AuthorNames.ROSTYSLAV_DIAKIV]: rostyslavDiakiv2018Avatar,
  [AuthorNames.ROMAN_SAHAN]: romanSahan2017Avatar,
  [AuthorNames.VOLODYMYR_KUSHNIR_RU]: volodymyrKushnir2017Avatar,
  [AuthorNames.VOLODYMYR_KUSHNIR_UA]: volodymyrKushnir2017Avatar,
  [AuthorNames.IVAN_HEDZ]: ivanHedz2023Avatar,
};

export { nameToImage };
