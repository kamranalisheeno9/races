import React, { useState } from 'react';
import './races.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container, Dropdown, DropdownButton } from 'react-bootstrap';
import { FaAngleLeft } from "react-icons/fa";

const Races = () => {
    const [info, setInfo] = useState(false)
    const [mainInfo, setMainInfo] = useState(false)
    const [loadRace, setLoadRace] = useState(false)
    const [selectRace, setselectRace] = useState(false)
    const [Registration, setRegistration] = useState(false)
    const [Dropdown, setDropdown] = useState(false)
    const [Idkey, setIdkey] = useState(0)


    const raceData = [
        {
            races: { name: "Race 1", dnf: "DNF 1", lap: 2, lapxy: "1x1", dnfxy: "4x4", countdown: "Countdown Text" }

        },
        {
            races: { name: "Race 2", dnf: "DNF 2", lap: 4, lapxy: "2x2", dnfxy: "3x3", countdown: "Countdown Text" }

        },
        {
            races: { name: "Race 3", dnf: "DNF 3", lap: 8, lapxy: "3x3", dnfxy: "2x2", countdown: "Countdown Text" }

        },

        {
            races: { name: "Race 4", dnf: "DNF 4", lap: 12, lapxy: "4x4", dnfxy: "1x1", countdown: "Countdown Text" }

        },


    ]
    const infoFunc = () => {
        setInfo(true)
        setMainInfo(true)

    }

    const MainInfo = () => {
        setInfo(false)
        setMainInfo(false)
        setLoadRace(false)
        setselectRace(false)
        setRegistration(false)


    }
    const Load = () => {
        setLoadRace(true)
        setInfo(true)
    }

    const Select = (k) => {
        setIdkey(k)
        setselectRace(true)
        setLoadRace(false)
        setDropdown(false)
    }
    const Register = () => {
        setselectRace(false)
        setRegistration(true)
    }

    const Unregister = () => {
        setLoadRace(true)
        setRegistration(false)
        setselectRace(false)
    }
    const Test = () => {
        setLoadRace(false)
        setRegistration(false)
        setselectRace(true)
    }


    const DropdownShow = () => {
        setDropdown(!Dropdown)
    }



    return (
        <div className="races-container">
            <Container className={info ? "hideinfo" : "buttons"}>

                <Row>
                    <Col className="btn" onClick={() => infoFunc()} >Info</Col>
                    <Col className="btn" onClick={() => Load()}>Load Race Public</Col>
                    <Col className="btn">Load Race Private</Col>
                    <Col className="btn">Map Edit</Col>
                </Row>
            </Container>
            <Container className={mainInfo ? "info-container" : "hideinfo"}>
                <Row>
                    <Col xl={2} lg={2} md={2} sm={2} xs={2}>

                        <button onClick={() => MainInfo()} > <FaAngleLeft />  </button>
                    </Col>
                    <Col>
                        <h6 >Main Menu</h6>
                    </Col>
                </Row>
            </Container>
            <Container className={loadRace ? "info-container" : "hideinfo"}>
                <Row>
                    <Col xl={2} lg={2} md={2} sm={2} xs={2}>

                        <button onClick={() => MainInfo()} > <FaAngleLeft />  </button>
                    </Col>

                </Row>
                <button onClick={() => DropdownShow()} className="dropdown btn">Select Map</button>
                <ul className={Dropdown ? "items" : "hideinfo"}>
                    {raceData.map((value, key) => {
                        return (

                            <li key={key} onClick={() => Select(key)}>{value.races.name}</li>
                        )
                    })}
                </ul>

            </Container>


            <Container className={selectRace ? "info-container" : "hideinfo"}>
                <Row>
                    <Col xl={2} lg={2} md={2} sm={2} xs={2}>

                        <button onClick={() => Unregister()} > <FaAngleLeft />  </button>
                    </Col>

                </Row>

                <Row className="test-race">
                    <Col xl={12} lg={12} md={12} sm={12} xs={12} className="test-col" >
                        {raceData[Idkey].races.name}
                    </Col>
                    <Col xl={5} lg={5} md={5} sm={5} xs={5} className="test-col">
                        {raceData[Idkey].races.lap}

                    </Col>
                    <Col xl={5} lg={5} md={5} sm={5} xs={5} className="test-col">
                        {raceData[Idkey].races.dnf}

                    </Col>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12} onClick={() => Register()} className="test-col" >
                        Open Race Registration
                    </Col>
                </Row>
            </Container>
            <Container className={Registration ? "info-container" : "hideinfo"} >
                <Row>
                    <Col xl={2} lg={2} md={2} sm={2} xs={2}>

                        <button onClick={() => Test()} > <FaAngleLeft />  </button>
                    </Col>

                </Row>
                <Row className="test-race">
                    <Col xl={12} lg={12} md={12} sm={12} xs={12} className="test-col" >
                        {raceData[Idkey].races.name}

                    </Col>
                    <Col xl={5} lg={5} md={5} sm={5} xs={5} onClick={() => Unregister()} className="test-col unregister">
                        Unregister
                    </Col>
                    <Col xl={6} lg={6} md={6} sm={6} xs={6} className="test-col">
                        <Row>
                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                LAPS : {raceData[Idkey].races.lapxy}

                            </Col>
                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                DNF : {raceData[Idkey].races.dnfxy}
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={5} lg={5} md={5} sm={5} xs={5} className="test-col" >
                        {raceData[Idkey].races.countdown}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Races;