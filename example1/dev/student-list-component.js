var React = require('react');
var studentList = [
    {name:"Sandeep", subject:"Physics", roll:4},
    {name:"John", subject:"Chemistry", roll:1},
    {name:"Smith", subject:"Physics", roll:2},
    {name:"Ramesh", subject:"Chemistry", roll:3}
];
var StudentListComponent = React.createClass({
    render: function() {
        var results = this.props.results;
        return (
            <ol>
                {studentList.map(function(student) {
                    return <li  key={student.roll}><h2>{student.name}</h2></li>;
                })}
            </ol>
        );
    }
});
module.exports = StudentListComponent;