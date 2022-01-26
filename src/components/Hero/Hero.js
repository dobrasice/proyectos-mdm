import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        Martín Dorantes Martínez. <br />
        Freelance, Web Developer. 
        </SectionTitle>
        <SectionText>
        Desarrollo WEB Profesional. Aportando orden al caos de datos.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;