
import { ConfigProvider, theme } from 'antd'
import React from 'react'

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Card: {
                        colorBgBase: 'transapent',
                        colorBgContainer: 'transapent'
                    },
                    Input: {
                        hoverBg: 'transapent',
                        activeBg: 'transapent',

                    },
                    Button: {

                    }
                },

                algorithm: theme.defaultAlgorithm
            }}
        >
            {children}
        </ConfigProvider>
    )
}
export default ThemeProvider