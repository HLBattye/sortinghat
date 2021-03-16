import React from 'react';
// import './App.css';

class SchoolRoster extends React.Component {
    render() {
        return (
            <div className={this.props.hidden ? "hidden" : ""}>
                <table class="table table-bordered" id="table">
                    <tr>
                        <th>Hufflepuffs</th>
                    </tr>
                    {/* <th>Ravenclaws</th> 
                        <th>Slytherins</th>
                        <th>Gryffindors</th> */}


                    {/* {objects.map((object, i) => <ObjectRow obj={object} key={i} />)} */}

                    {/* var rows = [];
for (var i = 0; i < numrows; {
                        rows.push(<ObjectRow key={i} />);
}
return <tbody>{rows}</tbody>; */}


                    {/* {this.props.students.map((student =>
                        <tr><td>{student}</td></tr>
                    ))} */}

                </table>
            </div >
        );
    }
}

export default SchoolRoster;
