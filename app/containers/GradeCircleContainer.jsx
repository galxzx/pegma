import React, { Component } from 'react'
import { connect } from 'react-redux'


class countCircleContainer extends Component {
  constructor(props) {
		super(props)
		this.studentId = props.studentId
		this.GPA = props.GPA || 'n/a'
		this.default = 1
		if((props.numOfAs + props.numOfBs + props.numOfCs + props.numOfFs) > 0) {
			this.default = 0
		}
		this.subject = props.subject ? props.subject : ''
		this.subjectClass = this.subject ? ('.' + this.subject) : ''

		this.data = [
	  {grade:'90-100', count: props.numOfAs}, 
		{grade: '80-89', count: props.numOfBs},
	  {grade: '70-79', count: props.numOfCs}, 
	  {grade: '0-69', count: props.numOfFs},
	  {grade: '', count: this.default }    	      
	 ]
	 console.log('DATA', this.data)
  }
  componentDidMount() {

		const width = 192,
		    height = 100,
		    radius = Math.min(width, height) / 2;

		const color = d3.scale.ordinal()
		    .range(["#00C692", "#43B9FF", "#FFC943", "#C60034", "#000000"]);

		const arc = d3.svg.arc()
		    .outerRadius(radius - 10)
		    .innerRadius(radius - 28);

		var pie = d3.layout.pie()
		    .sort(null)
		    .value(function(d) { return d.count; });

		var svg = d3.select(`#student${this.studentId} ${this.subjectClass}.count-circle`).append("svg")
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
		  .style("fill", function(d) { return color(d.data.grade); })

		g.append("text")
		  .style("font-size", "10pt" )				
		  .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
		  .attr("dy", ".35em")
		  .text(function(d) { if(d.data.count > 0) return letter(d.data.grade) })

		g.append("text")
		  .style("font-size", "18pt" )		
		  .attr("transform", "translate(0, 8)")
		  .text(this.GPA.toString())

		function letter(grade) {
		  if(grade === '90-100') return 'A'
		  else if(grade === '80-89') return 'B'
		  else if(grade === '70-79') return 'C'
		  else if(grade === '0-69') return 'F'
		  else return grade
		}

		function type(d) {
		  d.count = +d.count
		  return d;
		}

	}
 		render() {
 			return <div className={`${this.subject} count-circle`}></div>
 		}

 }

const mapState = (state) => {
  return {  }
}

export default connect(mapState) (countCircleContainer)
