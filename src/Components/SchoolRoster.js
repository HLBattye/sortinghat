import React from 'react';

class SchoolRoster extends React.Component {
    renderTableHeaders() {
        return this.props.houses.map((group, index) => {
            return <td>{group.name}</td>

        });
    }
    renderRows() {
        let rows = [];
        for (let j = 0; j < this.props.numberPerHouse; j++) {
            let row = this.props.houses.map((house, index) =>
                <td className={house.students[j] === undefined ? "" : "fade"}>
                    {house.students[j]}
                </td>
            );
            rows.push(<tr>{row}</tr>);
        }
        return rows;
    }

    render() {
        return (
            <div className={this.props.hidden ? "hidden" : ""}>
                <table className="table table-bordered" id="table">
                    <thead>
                        <tr>
                            {this.renderTableHeaders()}
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div >
        );
    }
}

export default SchoolRoster;
