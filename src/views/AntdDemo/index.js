import React, { Component } from 'react';
import { Button, Spin, Pagination, Badge } from 'antd';
import {
    DoubleLeftOutlined
  } from '@ant-design/icons';
class AntdDemo extends Component {
    constructor(props){
        super(props)
        this.state={
          isLoading: true
        }
    }
    closeloading =() => {
        this.setState({
          isLoading: false
        })
      }
    
      componentDidMount() {
        console.log('componentDidMount...',)
        window.setTimeout(this.closeloading, 5000)
      }
    render() {
        return (
            <div>
                <Spin spinning={this.state.isLoading}>
                    <div>In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development.
            After massive project practice and summaries, Ant Design, a design language for background applications, is refined by Ant UED Team, which aims touniform the user interface specs for internal background projects, lower the unnecessary cost of design differences and implementation and liberate the resources of design and front-end development
                    </div>
                    </Spin>
                    <Button icon={<DoubleLeftOutlined />}>antd按钮</Button>
                    <Badge count={100}>
                    <div style={{display:'inline-block', width:'100px'}}>
                    After massive project practice and summaries, Ant Design, a design language for background applications, is refined by Ant UED Team, which aims touniform the user interface specs for internal background projects, lower the unnecessary cost of design differences and implementation and liberate the resources of design and front-end development
                    </div>
                    </Badge>
                    <Pagination
                    total={85}
                    showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                    defaultPageSize={20}
                    defaultCurrent={1}
                    />
            </div>
        );
    }
}

export default AntdDemo;
