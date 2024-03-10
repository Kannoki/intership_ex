import { Input, Typography, Image } from 'antd';
import { UsergroupAddOutlined, PlusOutlined, MenuFoldOutlined, TableOutlined } from '@ant-design/icons';
import { SearchProps } from 'antd/es/input';
import './DeviceSetting.scss';

const { Search } = Input;

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
function DeviceSetting() {
    return (
        <div>
            <div className="headerListUser">
                <div>
                    <UsergroupAddOutlined />
                    <Typography.Text className="titleListUser">Danh sách loại thiết bị</Typography.Text>
                </div>
                <div>
                    <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
                    <MenuFoldOutlined className="createUserButt" />
                    <TableOutlined />
                    <PlusOutlined className="createUserButt" />
                </div>
            </div>
            <div className="boxProducts">
                <div className="boxProductItem">
                    <image
                        className="imgProduct"
                        href="https://intomau.com/Content/upload/images/anh-nen-anime-nu-cuc-ngau.jpg"
                    />
                </div>
            </div>
        </div>
    );
}

export default DeviceSetting;
