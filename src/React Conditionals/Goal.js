import React from 'react';
function MissedGoal() {
    <h2>Missed</h2>;
}

function MadeGoal() {
    <h2>Made</h2>;
}

function Goal(props) {
    const isGoal = props.isGoal;
    if (isGoal) {
        return <MadeGoal />;
    }
    return <MissedGoal />;
}

export default Goal;