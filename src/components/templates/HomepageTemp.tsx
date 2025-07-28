import React from 'react';
import { Card, Col, Row, Typography, Tag } from 'antd';

const { Title, Text } = Typography;

interface Table {
  id: number;
  name: string;
  status: 'trống' | 'đang chơi';
}

const tables: Table[] = [
  { id: 1, name: 'Bàn 1', status: 'trống' },
  { id: 2, name: 'Bàn 2', status: 'đang chơi' },
  { id: 3, name: 'Bàn 3', status: 'trống' },
  { id: 4, name: 'Bàn 4', status: 'đang chơi' },
  { id: 5, name: 'Bàn 5', status: 'trống' },
];

const HomepageTemp: React.FC = () => {
  return (
    <div style={{ padding: 24 }}>
      <Title level={2} style={{ marginBottom: 24 }}>
        Quản lý bàn BI-A
      </Title>
      <Row gutter={[16, 16]}>
        {tables.map((table) => (
          <Col key={table.id} xs={24} sm={12} md={8} lg={6} xl={4}>
            <Card
              hoverable
              style={{
                borderColor: table.status === 'đang chơi' ? '#ff4d4f' : '#52c41a',
              }}
              bodyStyle={{ textAlign: 'center' }}
            >
              <Title level={4}>{table.name}</Title>
              <Tag color={table.status === 'đang chơi' ? 'red' : 'green'}>
                {table.status}
              </Tag>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomepageTemp;
