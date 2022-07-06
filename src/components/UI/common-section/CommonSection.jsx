import React from 'react';
import { Container } from 'reactstrap';
import '../../../styles/commen-section.css';

const CommonSection = (props) => {
  return (
    <section className='common_section'>
        <Container>
            <h2 className='common_section_title'>{props.title}</h2>
        </Container>
    </section>
  )
}

export default CommonSection;