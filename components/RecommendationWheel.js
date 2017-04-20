import React, { PropTypes } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const RecommendationWheel = ({ data }) => {
  // add a value to the data to make it compatible with the pie chart
  const chartCompatibleData = data.map(recommendation => ({
    ...recommendation,
    value: 1,
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={chartCompatibleData}
          cx="50%"
          cy="50%"
          innerRadius="60%"
          outerRadius="80%"
          paddingAngle={5}
        >
          {chartCompatibleData.map(entry => <Cell key={entry._id} fill="#ccc" />)}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

RecommendationWheel.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      job: PropTypes.string,
      avatar: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default RecommendationWheel;
