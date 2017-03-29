import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import c3 from 'c3';

class Chart extends React.Component {
  componentDidMount() {
    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.chart),
      data: {
        columns: this.props.columns,
        type: 'donut'
      }
    });
  }
  componentWillReceiveProps() {
    this.chart.load({ columns: this.props.columns });
  }
  componentWillUnmount() {
    this.chart.destroy();
  }
  render() {
    return (
      <div ref="chart" ></div>
    );
  }
}

Chart.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.array)
};

export default Chart;