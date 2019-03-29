import React from 'react';
import {
    Grid,
    Row,
    Col
} from 'react-bootstrap';

import { Card } from '../../components/Card/Card';
import { FormInputs } from '../../components/FormInputs/FormInputs';
import Button from '../../components/CustomButton/CustomButton';

const UserProfile = () => { 
   return (
        <div className="content">
            <Grid fluid>
                <Row>
                    <Col md={6}>
                        <Card
                            title="Subscribe With Your ATM CARD"
                            content={(
                                <form>
                                    <FormInputs
                                        ncols={[ 'col-md-8' ]}
                                        proprieties={[
                                            {
                                                label: 'Card Number',
                                                type: 'email',
                                                bsClass: 'form-control',
                                                placeholder: 'Valid Card Number'
                                            }
                                        ]}
                                    />
                                    <FormInputs
                                        ncols={[ 'col-md-4', 'col-md-4' ]}
                                        proprieties={[
                                            {
                                                label: 'Expiration Date',
                                                type: 'text',
                                                bsClass: 'form-control',
                                                placeholder: 'MM/YY'
                                            },
                                            {
                                                label: 'CVC',
                                                type: 'text',
                                                bsClass: 'form-control',
                                                placeholder: 'CVC'
                                            }
                                        ]}
                                    />
                                    <Button bsStyle="info" fill type="submit">
                      Start Subscription
                                    </Button>
                                    <div className="clearfix" />
                                </form>
                            )}
                        />
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};
export default UserProfile;
