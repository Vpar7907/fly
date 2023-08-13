'use client'

import { Button } from "antd";

export function NewComp(){
    console.log('only client');
    
    return <><Button type="primary">Кнопка</Button></>
}