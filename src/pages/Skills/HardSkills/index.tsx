import * as S from './HardSkills.module';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

import { DiHtml5, DiReact, DiCss3, DiJavascript, DiAndroid } from 'react-icons/di';
import { SiTypescript, SiJest, SiStyledcomponents, SiRedux, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
const HardSkills = () => {
  return (
    <S.CardWrapper>
      <S.Card data-tooltip-id="htmlTooltip" data-tooltip-content="HTML5 - Experience: 3 years">
        <DiHtml5 size={58} />
      </S.Card>

      <S.Card data-tooltip-id="cssTooltip" data-tooltip-content="CSS3 - Experience: 3 years">
        <DiCss3 size={58} />
      </S.Card>
      <S.Card data-tooltip-id="javaScriptTooltip" data-tooltip-content="JavaScript Experience: 3 years">
        <DiJavascript size={58} />
      </S.Card>
      <S.Card data-tooltip-id="typescrtipTooltip" data-tooltip-content="TypeScript  Experience: 2 years">
        <SiTypescript size={58} />
      </S.Card>
      <S.Card data-tooltip-id="reactTooltip" data-tooltip-content="React  Experience: 3 years">
        <DiReact size={58} />
      </S.Card>
      <S.Card data-tooltip-id="jestTooltip" data-tooltip-content="Jest Experience: 1 year">
        <SiJest size={58} />
      </S.Card>
      <S.Card data-tooltip-id="reduxTooltip" data-tooltip-content="Redux Experience: 2 years">
        <SiRedux size={58} />
      </S.Card>
      <S.Card data-tooltip-id="androidTooltip" data-tooltip-content="React Native  Experience: 1 year">
        <DiAndroid size={58} />
      </S.Card>
      <S.Card data-tooltip-id="styledTooltip" data-tooltip-content="Styled Components Experience: 2 years">
        <SiStyledcomponents size={58} />
      </S.Card>
      <S.Card data-tooltip-id="nextJsTooltip" data-tooltip-content="NextJS  Experience: 2 years">
        <SiNextdotjs size={58} />
      </S.Card>
      <S.Card data-tooltip-id="tailwindTooltip" data-tooltip-content="TailwindCSS Experience: 1 year">
        <SiTailwindcss size={58} />
      </S.Card>

      <Tooltip id="htmlTooltip" />
      <Tooltip id="cssTooltip" />
      <Tooltip id="javaScriptTooltip" />
      <Tooltip id="typescrtipTooltip" />
      <Tooltip id="reactTooltip" />
      <Tooltip id="androidTooltip" />
      <Tooltip id="nextJsTooltip" />
      <Tooltip id="styledTooltip" />
      <Tooltip id="jestTooltip" />
      <Tooltip id="reduxTooltip" />
      <Tooltip id="tailwindTooltip" />
    </S.CardWrapper>
  );
};
export default HardSkills;
