import React from "react";
import styled from "styled-components";
import Header from "../common/Header"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5em;
`

const Number = styled.img`
    height: 160px;
    width: auto;
`

const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 8px;
`

const Title = styled.h2`
    margin: 0;
    color: #212226;    
    font-family: "Mort", sans-serif;
    font-weight: 900;
    font-size: 3em;
`

const Content = styled.p`
    margin: 0;
    font-family: "Lato", sans-serif;
    font-size: 1.2em;
    align-self: flex-start;
`

const Argument = styled.div`
    display: flex;
    column-gap: 8px;
`

const Arguments = () => {
    return(
        <Container id="Argumente">
            <Header>Argumente</Header>
            <Argument>
                <Number src="numbers/one.svg" />
                <Text>
                    <Title>Zukunft mitgestalten</Title>
                    <Content>Politik für die Zukunft machen heisst, die Zukunft selbst mitgestalten zu können. Wir wollen mitreden, wie der Kanton Aargau in vielen Jahren aussehen wird, deshalb fordern wir unser Mitspracherecht ein.</Content>
                </Text>
            </Argument>
            <Argument>
                <Number src="numbers/two.svg" />
                <Text>
                    <Title>Altersbalance wiederherstellen</Title>
                    <Content>„Der oder die Medianstimmende in der Schweiz ist heute 57 Jahre alt. [...] 2023 [...] dürfte es bei 58 Jahren liegen, 2027 dann bei 59.“ Gemäss Politikwissenschaftler und Historiker Claude Longchamp habe das „nichts mit der ungleichen Beteiligung nach Alter zu tun. Es ist eine Folge der rasant steigenden Alterung der Gesellschaft. Die Senkung des Stimm- und Wahlrechtsalters in der Schweiz ist eine denkbare Gegenmassnahme dazu. Es geht darum, dass die Alterspyramide der politischen Entscheidenden etwas weniger aus dem Lot gerät“.</Content>
                </Text>
            </Argument>
            <Argument>
                <Number src="numbers/three.svg" />
                <Text>
                    <Title>Reife Leute früh einbinden</Title>
                    <Content>Jungen Menschen wird politische Bildung schon heute in der Volksschule auf den Weg gegeben. Unsere Jugend ist reif, informiert und engagiert genug, um in der Politik mitbestimmen zu können, dies zeigt auch die Forschung. Möglicherweise wird durch die frühe Einbindung der Jugend die Stimmbeteiligung mit dem Stimmrechtsalter 16 sogar langfristig erhöht. Die Jugend wird direkt in die politischen Prozesse eingebunden und darf Verantwortung für unsere Gesellschaft übernehmen.</Content>
                </Text>
            </Argument>
            <Argument>
                <Number src="numbers/four.svg" />
                <Text>
                    <Title>Fortschrittlicher Kanton Aargau</Title>
                    <Content>Unser Kanton ist fortschrittlich und möchte sich auf die Zukunft vorbereiten. Mit dem aktiven Stimmrechtsalter 16 schaffen wir die Grundlagen für eine Demokratie mit Zukunft. Hier wird die Zukunftsplanung zusammen mit den Betroffenen aktiv angegangen, so wie dies bereits im Kanton Glarus oder in Österreich seit 2007 der Fall ist.</Content>
                </Text>
            </Argument>
            <Argument>
                <Number src="numbers/five.svg" />
                <Text>
                    <Title>Die Demokratie sind wir alle</Title>
                    <Content>Unsere Demokratie sind wir alle. Wir gestalten gemeinsam unsere Zukunft, unser Land, unseren Kanton und die Gemeinden. Demokratie heisst, mit der gesamten Bevölkerung gemeinsam Lösungen für die Herausforderungen unserer Zeit zu finden. Diese Lösungen sind umso besser, wenn sie möglichst breit in der Bevölkerung abgestützt sind. Es macht keinen Sinn, eine reife und äusserst motivierte Gruppe von jungen Menschen von diesem Prozess auszuschliessen.</Content>
                </Text>
            </Argument>
        </Container>
    )
}

export default Arguments;