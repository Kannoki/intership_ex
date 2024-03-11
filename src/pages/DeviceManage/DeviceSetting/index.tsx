import { Input, Typography, Image } from 'antd';
import {
    UsergroupAddOutlined,
    PlusOutlined,
    MenuFoldOutlined,
    TableOutlined,
    QrcodeOutlined,
    ExclamationCircleOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import { SearchProps } from 'antd/es/input';
import './DeviceSetting.scss';

const { Search } = Input;

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
const sumProduct = [1, 2, 3, 4, 5, 6];
const InfProductData = [
    {
        title: 'GateWay:',
        data: 'True',
        style: { fontWeight: 'bold', color: 'green' },
    },
    {
        title: 'Ngày Tạo: ',
        data: '20/05/2020',
        style: {},
    },
    {
        title: 'Số TB đã lắp đặt: ',
        data: '421',
        style: {},
    },
    {
        title: 'Mô tả:',
        data: 'Thiết bị đo năng lượng',
        style: { fontWeight: 'bold', fontSize: '15px' },
    },
];
function DeviceSetting() {
    return (
        <div>
            <div className="headerListUser">
                <div>
                    <UsergroupAddOutlined />
                    <Typography.Text className="titleListUser">Danh sách loại thiết bị</Typography.Text>
                </div>
                <div className="IconHeaderBoxProduct">
                    <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
                    <MenuFoldOutlined className="createUserButt" />
                    <TableOutlined />
                    <PlusOutlined className="createUserButt" />
                </div>
            </div>
            <div className="boxProducts">
                {sumProduct.map(() => (
                    <div className="boxProductItem">
                        <img
                            className="imgProduct"
                            src="https://intomau.com/Content/upload/images/anh-nen-anime-nu-cuc-ngau.jpg"
                        />
                        <div className="BoxInfProduct">
                            <div className="TitleProduct">
                                <Typography.Text className="NameProduct">Name Products</Typography.Text>
                                <QrcodeOutlined className="IconQr" />
                            </div>
                            <div className="InfProduct">
                                {InfProductData.map((InfData) => (
                                    <div className="InfProductItem">
                                        <Typography.Text>{InfData.title}</Typography.Text>
                                        <Typography.Text style={InfData.style}>{InfData.data}</Typography.Text>
                                    </div>
                                ))}
                            </div>
                            <div className="BoxIconInf">
                                <ExclamationCircleOutlined style={{ color: 'red', marginRight: '10px' }} />
                                <SettingOutlined style={{ color: 'green', marginRight: '10px' }} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DeviceSetting;
