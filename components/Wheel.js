import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { PieChart, Pie, Cell, ResponsiveContainer as RechartsContainer } from 'recharts';
import colors from '../styles/colors';

const Wheel = ({ recommendations }) => {
  // add a value to the data to make it compatible with the pie chart
  const chartCompatibleData = recommendations.map(recommendation => ({
    ...recommendation,
    value: 1,
  }));

  return (
    <ResponsiveWrapper>
      <RechartsContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartCompatibleData}
            cx="50%"
            cy="50%"
            innerRadius="60%"
            outerRadius="80%"
            paddingAngle={5}
          >
            {chartCompatibleData.map(entry => (
              <Cell key={entry._id} fill={colors.blue} strokeFill={colors.blue} />
            ))}
          </Pie>
        </PieChart>
      </RechartsContainer>
    </ResponsiveWrapper>
  );
};

Wheel.propTypes = {
  recommendations: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      job: PropTypes.string,
      avatar: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

const ResponsiveWrapper = styled.div`
  width: 25vw;
  height: 25vw;
`;

export default Wheel;
