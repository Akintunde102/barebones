import React, { Component } from 'react';
import {
    Grid,
    Row,
    Col,
    FormGroup,
    ControlLabel,
    FormControl
} from 'react-bootstrap';

import { Card } from '../../components/Card/Card';
import { FormInputs } from '../../components/FormInputs/FormInputs';
import Button from '../../components/CustomButton/CustomButton';
import { Tasks } from '../../components/Tasks/Tasks';

class Dashboard extends Component {
    createLegend ( json ) {
        const legend = [];
        for ( let i = 0; i < json.names.length; i++ ) {
            const type = `fa fa-circle text-${ json.types[ i ] }`;
            legend.push( <i className={type} key={i} /> );
            legend.push( ' ' );
            legend.push( json.names[ i ] );
        }
        return legend;
    }

    render () {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Search For Anything"
                                stats="This Search Box crawls the whole platform for information that fits your keyword"
                                statsIcon="fa fa-history"
                                content={(
                                    <form>
                                        <Row>
                                            <Col md={12}>
                                                <FormInputs
                                                    ncols={[ 'col-md-12' ]}
                                                    proprieties={[
                                                        {
                                                            label: '',
                                                            type: 'text',
                                                            bsClass: 'form-control',
                                                            placeholder: 'Search For Anything',
                                                            defaultValue: ''
                                                        }
                                                    ]}
                                                />
                                            </Col>
                                        </Row>
                                        <Button bsStyle="light" pullRight fill type="submit">
                                        Go!
                                        </Button>
                                        <div className="clearfix" />
                                    </form>
                                )}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Card
                                title="Newly Uploaded Reports"
                                category="Click Below to View Reports"
                                stats="In the last One Week"
                                statsIcon="fa fa-history"
                                content={(
                                    <div className="table-full-width">
                                        <table className="table">
                                            <Tasks />
                                        </table>
                                    </div>
                                )}
                            />
                        </Col>
                        <Col md={6}>
                            <Card
                                title="Recently Viewed Reports"
                                category="Click Below to View Reports"
                                stats="In the last One Week"
                                statsIcon="fa fa-history"
                                content={(
                                    <div className="table-full-width">
                                        <table className="table">
                                            <Tasks />
                                        </table>
                                    </div>
                                )}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Card
                                title="Most Viewed Reports"
                                category="Click Below to View Reports"
                                stats="In the last One Week"
                                statsIcon="fa fa-history"
                                content={(
                                    <div className="table-full-width">
                                        <table className="table">
                                            <Tasks />
                                        </table>
                                    </div>
                                )}
                            />
                        </Col>
                        <Col md={6}>
                            <Card
                                title="Saved Reports"
                                category="Click Below to View Reports"
                                stats="In the last One Week"
                                statsIcon="fa fa-history"
                                content={(
                                    <div className="table-full-width">
                                        <table className="table">
                                            <Tasks />
                                        </table>
                                    </div>
                                )}
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Dashboard;
