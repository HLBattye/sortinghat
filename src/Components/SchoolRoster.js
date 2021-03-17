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
                <td className={house.students[j] === undefined ? "" : "name"}>
                    {house.students[j]}
                </td>
            );
            rows.push(<tr>{row}</tr>);
        }
        return rows;
    }
    //     renderTableData() {
    //         let elements = [];
    //         for (let j = 0; j < this.props.numberPerHouse; j++) {
    //             elements.push(<tr><td>{this.props.houses[0].students[j]}</td>
    //                 <td>{this.props.houses[1].students[j]}</td>
    //                 <td>{this.props.houses[2].students[j]}</td>
    //                 <td>{this.props.houses[3].students[j]}</td></tr>);
    //         }
    //         return elements;
    //     }

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
