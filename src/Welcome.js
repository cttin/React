import React from 'react' // 为什么要 import React
// import用于导入其他模块提供的功能，Welcome组件继承了React.Component，会用到react的一些类和方法

class Welcome extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date()
		}
		setInterval(()=>{ 
	    this.setState({
        date: new Date() // 更新 date
	    })
     })
		
		console.log('我已经在 constructor 里将 props 和 state 初始化好了');
	}
	componentWillMount() {
		console.log('运行到这里的话，说明马上就要运行 render 了');
	}
	render() {
		console.log('嗯，这里是 render');
		return(
			<div>
				<h1>Hello, {this.props.name}</h1>
				<h2>{this.state.date.toString()}</h2>
			</div>
		)
	}
	componentDidMount() {
		console.log('已经挂载到页面里了');
	}
}

// 也可以写成函数形式的组件
// function Welcome(props) {
// 	return <h1>Hello, {props.name}</h1>
// }

export default Welcome  // 为什么要 export =>因为其他模块需要用到Welcome组件，为什么要加 default =>使用import命令的时候，用户需要知道所要加载的变量名或函数名，否则无法加载。export default为模块指定默认输出，默认输出一个函数，不需要使用大括号。