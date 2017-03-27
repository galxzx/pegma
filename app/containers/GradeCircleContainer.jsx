import React, { Component } from 'react'
import { connect } from 'react-redux'


class GradeCircleContainer extends Component {
  constructor(props) {
		super(props)

		this.studentId = props.studentId

		this.data = [
	  {age:'90-100', grade: 11}, 
		{age: '80-89', grade: 2},
	  {age: '70-79', grade: 3}, 
	  {age: '0-69', grade: 1}    
	 ]
  }

  componentDidMount() {

		const width = 192,
		    height = 100,
		    radius = Math.min(width, height) / 2;

		const color = d3.scale.ordinal()
		    .range(["#00C692", "#43B9FF", "#FFC943", "#C60034"]);

		const arc = d3.svg.arc()
		    .outerRadius(radius - 7.5)
		    .innerRadius(radius - 21);

		var pie = d3.layout.pie()
		    .sort(null)
		    .value(function(d) { return d.grade; });

		var svg = d3.select(`#s${this.studentId} .grade-circle`).append("svg")
		  .attr("width", width)
		  .attr("height", height)
		  .append("g")
		  .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")

		var g = svg.selectAll(".arc")
		  .data(pie(this.data))
		  .enter().append("g")
		  .attr("class", "arc");

		g.append("path")
		  .attr("d", arc)
		  .style("fill", function(d) { return color(d.data.age); })

		g.append("text")
		  .style("font-size", "10pt" )				
		  .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
		  .attr("dy", ".35em")
		  .text(function(d) { return letter(d.data.age) })

		g.append("text")
		  .style("font-size", "18pt" )		
		  .attr("transform", "translate(0, 8)")
		  .text(function(d) { return "85" })


		function letter(grade) {
		  console.log(grade)
		  if(grade === '90-100') return 'A'
		  else if(grade === '80-89') return 'B'
		  else if(grade === '70-79') return 'C'
		  else return 'F'
		}

		function type(d) {
		  d.grade = +d.grade;
		  return d;
		}

	}
 		render() {
 			return <div className="grade-circle"></div>
 		}

 }

const mapState = (state) => {
  return {  }
}

export default connect(mapState) (GradeCircleContainer)
