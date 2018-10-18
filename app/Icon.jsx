import React,{Component} from 'react'
// import default32 from './icons/assets/default32.svg';
// import default33 from './icons/assets/default33.svg';
// import user from './icons/assets/user.svg';
import iconImg  from './icons/index.js';

export default  class Icon extends Component{
    render(){
        const { name } = this.props;
        const symbolId = iconImg.find(({default:{id}})=>id===name)
        return (
            <div>
                <svg>
                    <use xlinkHref={`#${symbolId.default.id}`} />
                </svg>
            </div>
        )
    }
}