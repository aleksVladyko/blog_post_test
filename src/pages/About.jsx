import { Card, Accordion } from "react-bootstrap";
const About = () => {
    return ( 
    <Card className="text-dark">
    <Card.Body>
      <Card.Title>Резюме</Card.Title>
      
      <Card.Text>
      <p>Меня зовут Александр.</p> <p>Ваша <Card.Link href="https://krasnoyarsk.hh.ru/vacancy/80725560?hhtmFrom=vacancy_response">Вакансия</Card.Link> Junior Frontend Developer (React)-разработчика меня заинтересовала.
Я уверен, что буду полезен вашей организации, и смогу внести вклад в развитие компании. Я убежден, что являюсь идеальным кандидатом на эту должность. </p>
<p>Разработка и web-дизайн моя страсть и увлечение, я планирую построить долгосрочную карьеру в этой области. 
Надеюсь в ближайшее время обсудить с вами мой вклад в развитие компании.
Спасибо за ваше время и внимание.</p>
<Accordion>
<Accordion.Item eventKey="0">
        <Accordion.Header>Ключевые навыки</Accordion.Header>
        <Accordion.Body>
        <p>Изучил основы HTML, CSS, Javascript, React, Redux и продолжаю развиваться, знаком с Webpack, Node.js, использую такие библиотеки как bootstrap, Ant Design, Material-UI и другие. Готов и хочу учиться, получать все необходимые навыки, знания для работы.</p>
        <p>Soft skills имеются. 🙂</p>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      </Card.Text>
      <Card.Text><span>Ccылка на </span>
      <Card.Link href="https://github.com/aleksVladyko">GitHub</Card.Link>.
      </Card.Text>
    </Card.Body>
  </Card>
)};
export default About;
