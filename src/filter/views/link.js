import React from "react";
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { setFilter } from "../actions";

const Link = ({ active, children, onClick }) => {
    if (active) {
        return (<b className='selected'>{children}</b>)
    } else {
        return (
            <div onClick={(event) => {
                event.preventDefault();
                onClick()
            }}>
                {children}
            </div>
        )
    }
};

Link.propTypes = {
    children: propTypes.node.isRequired,
    active: propTypes.bool.isRequired,
    onClick: propTypes.func
};

const mapStateToProps = (state, ownProps) => {
    return {
        active: state.filter === ownProps.filters
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        console.log('12321', ownProps.filter);
        dispatch(setFilter(ownProps.filter))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
