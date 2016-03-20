var React = require('react');
var Radium = require('radium');
var studentList = [
    {name:"Sandeep", subject:"Physics", roll:4},
    {name:"John", subject:"Chemistry", roll:1},
    {name:"Smith", subject:"Physics", roll:2},
    {name:"Ramesh", subject:"Chemistry", roll:3}
];
var styles = {
    header: {
        color: '#999',
        ':hover':{
            color:'#00f'
        },
        ':focus':{
            color:'#f00'
        }
    }
};
var StudentListComponent = React.createClass({
    render: function() {
        var results = this.props.results;
        return (
            <ol>
                {studentList.map(function(student) {
                    return <li  key={student.roll}>
                        <a   key={student.roll} style={[styles.header]}  href="#">
                            {student.name}
                        </a>
                    </li>;
                })}
            </ol>
        );
    }
});
module.exports = Radium(StudentListComponent);