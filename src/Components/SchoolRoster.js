import React from 'react';

class SchoolRoster extends React.Component {
  renderTableHeaders() {
    return this.props.houses.map((group, index) => {
      return <td>{group.name}</td>
      
    });
  }

  renderTableData(){
    let elements = [];
    for (let j = 0; j < 3; j++)
    {
      elements.push(<tr><td>{this.props.houses[0].students[j]}</td>
        <td>{this.props.houses[1].students[j]}</td>
        <td>{this.props.houses[2].students[j]}</td>
        <td>{this.props.houses[3].students[j]}</td></tr>);
    }
    return elements;
  }

    render() {
        return (
            <div className={this.props.hidden ? "hidden" : ""}>
                <table class="table table-bordered" id="table">
              <thead>
                <tr>
                  {this.renderTableHeaders()}
                </tr>
              </thead>
              <tbody>
                {this.renderTableData()}
              </tbody>
                </table>
            </div >
        );
    }
}

export default SchoolRoster;
