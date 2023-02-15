import { Divider, Card, Button, Typography, Space, Col, Row, Statistic, Avatar } from 'antd';
import { LikeOutlined, StarOutlined } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';


const { Text, Link } = Typography;
const url1 = 'https://shotkit.com/wp-content/uploads/2021/02/black_and-white_portraits_christopher_campbell.jpg';
const url2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO-U-s4rnwQvnEFDbe4MZFp3_7P48DjYCp7w&usqp=CAU';
const url3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgJe2XwUeFgZKLIsJ1VaPy91oPv0s2dsqxIg&usqp=CAU';

function Comment() {
    return <div className="Comment">


        <div className='LayoutTwo'>
            <div className='ProfilePic'>
                <Row>
                <Avatar src={<img src={url1} alt="avatar" />} />

                </Row>
            </div>

            <div>

                <div>
                    <Text strong>
                    Alma Andrews
                    </Text>
                </div>
                <div className='PaddingText'>
                    <Text type="secondary">
                        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                    </Text>
                </div>
                <div className='PaddingText'>
                    <Text>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
                    </Text>
                </div>
                <div>
                    <Row className='BottomButtons' >
                        <Button type="primary" ghost>
                            Reply
                        </Button>

                        <Space className='IconsBottom' direction='horizontal'>
                            <Row gutter={50}>
                                <Col className='VerticleDivider' >
                                    <Statistic valueStyle={{ fontSize: 16 }} title="" value={62} prefix={<LikeOutlined style={{ fontSize: 16 }} />} />
                                </Col>

                                <Col >
                                    <Statistic valueStyle={{ fontSize: 16 }} title="" value={18} prefix={<StarOutlined style={{ fontSize: 16 }} />} />
                                </Col>
                            </Row>
                        </Space>
                    </Row>
                </div>
            </div>
        </div>
        <Divider />


        <div className='LayoutTwo'>
            <div className='ProfilePic'>
                <Row>
                <Avatar src={<img src={url2} alt="avatar" />} />

                </Row>
            </div>

            <div>

                <div>
                    <Text strong>
                    Nelson Richards
                    </Text>
                </div>
                <div className='PaddingText'>
                    <Text type="secondary">
                        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                    </Text>
                </div>
                <div className='PaddingText'>
                    <Text>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
                    </Text>
                </div>
                <div>
                    <Row className='BottomButtons' >
                        <Button type="primary" ghost>
                            Reply
                        </Button>

                        <Space className='IconsBottom' direction='horizontal'>
                            <Row gutter={50}>
                                <Col className='VerticleDivider' >
                                    <Statistic valueStyle={{ fontSize: 16 }} title="" value={62} prefix={<LikeOutlined style={{ fontSize: 16 }} />} />
                                </Col>

                                <Col >
                                    <Statistic valueStyle={{ fontSize: 16 }} title="" value={18} prefix={<StarOutlined style={{ fontSize: 16 }} />} />
                                </Col>
                            </Row>
                        </Space>
                    </Row>
                </div>
            </div>
        </div>
        <Divider />

        <div className='LayoutTwo'>
            <div className='ProfilePic'>
                <Row>
                <Avatar src={<img src={url3} alt="avatar" />} />

                </Row>
            </div>

            <div>

                <div>
                    <Text strong>
                    Stella Reid
                    </Text>
                </div>
                <div className='PaddingText'>
                    <Text type="secondary">
                        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                    </Text>
                </div>
                <div className='PaddingText'>
                    <Text>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
                    </Text>
                </div>
                
            </div>
        </div>
        

    </div>
}



export default Comment