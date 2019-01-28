import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
    Button,
    Container,
    Menu,
    Responsive,
    Segment,
    Visibility
} from 'semantic-ui-react';
import HomepageHeading from './HomepageHeading';

const getWidth = () => {
    const isSSR = typeof window === 'undefined';

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class DesktopContainer extends Component {
    constructor ( props ) {
        super( props );

        this.state = {};

        this.hideFixedMenu = () => this.setState( { fixed: false } );
        this.showFixedMenu = () => this.setState( { fixed: true } );
    }

    render () {
        const { children } = this.props;
        const { fixed } = this.state;

        return (
            <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Segment
                        inverted={fixed}
                        textAlign="center"
                        style={
                            {
                                minHeight: '100vh',
                                padding: '1em 0em'
                            }
                        }
                        vertical
                    >
                        <Menu
                            fixed={fixed ? 'top' : null}
                            inverted={fixed}
                            pointing={!fixed}
                            secondary={!fixed}
                            size="large"
                        >
                            <Container>
                                <Menu.Item
                                    as="a"
                                    active
                                >
                  Home
                                </Menu.Item>
                                <Menu.Item as="a">Work</Menu.Item>
                                <Menu.Item as="a">Company</Menu.Item>
                                <Menu.Item as="a">Careers</Menu.Item>
                                <Menu.Item position="right">
                                    <Button as="a" inverted={fixed}>
                    Log in
                                    </Button>
                                    <Button as="a" inverted={fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Sign Up
                                    </Button>
                                </Menu.Item>
                            </Container>
                        </Menu>
                        <HomepageHeading />
                    </Segment>
                </Visibility>

                {children}
            </Responsive>
        );
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node
};

DesktopContainer.defaultProps = {
    children: 'Unspecified Children Component <DesktopContainer>'
};

export default DesktopContainer;
