import type { StyleProps } from "../../common";

export default interface GridContainerStyleProps extends StyleProps {
  display?: String;
  backgroundColor?: String;
  color?: String;
  gridTemplateColumns?: String;
  gridTemplateRows?: String;
  gridTemplateAreas?: String;
  gridTemplateAreas_Def?: String;
  gridTemplateAreas_MW_600px?: String;
  gap?: String;
  gap_MW_600px?: String;
  gap_Def?: String;
  justifyItems?: String;
  padding?: String;
  margin?: String;
  padding_MW_600px?: String;
  margin_MW_600px?: String;
  padding_Def?: String;
  margin_Def?: String;
  alignItems?: String;
  justifyContent?: String;
  alignContent?: String;
  gridAutoColumns?: String;
  gridAutoRows?: String;
  gridAutoFlow?: String;
}