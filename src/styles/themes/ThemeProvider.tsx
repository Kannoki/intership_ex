
import { ConfigProvider, theme } from 'antd'
import React from 'react'

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ConfigProvider
            theme={{
                
                components: {
                    Card: {
                        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
                    },
                    Input: {
                        hoverBg: 'transapent',
                        activeBg: 'transapent',

                    },
                    Button: {

                    },
                    Table: {
                        headerBg: "#DADADA",
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