import React, { FunctionComponent, useState, useCallback } from 'react';
import { Form, Input, message } from 'antd';
import request from './request';
const { Search } = Input;
const { insertUrl, findUrl } = request;


function UrlSearch() {
    const [result, setResult] = useState('');

    const handlInsertUrl = useCallback(async (value) => {
        if (!value) {
            message.error('请输入链接');
            return;
        }
        const resp = await insertUrl(value)
        const { code, data, message: msg } = resp;
        if (!!code) {
            message.error(msg);
        }
        setResult(`短连接:  ${data}`)
    }, [])

    const handlFindUrl = useCallback(async (value) => {
        if (!value) {
            message.error('请输入短连接');
            return;
        }
        const resp = await findUrl(value)
        const { code, data, message: msg } = resp;
        if (!!code) {
            message.error(msg);
        }
        setResult(`长连接:  ${data}`)
    }, [])

    return (
        <div>
            <div className="search-body-con">
                <div className="search-body">

                    <div className="search-header">
                        {'短连接生成系统'}
                    </div>
                    {"链接 -> 短连接"}
                    <Search
                        placeholder="链接"
                        onSearch={handlInsertUrl}
                        defaultValue='https://www.baidu.com/'
                    />
                    {"短连接 -> 链接"}
                    <Search placeholder="短连接" onSearch={handlFindUrl} />
                    <div className='search-body__result'>{result}</div>
                </div>
            </div>
        </div >
    );
}

export default UrlSearch;
