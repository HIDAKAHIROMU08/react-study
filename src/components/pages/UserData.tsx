import axios from "axios";
import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataGrid , jaJP } from "@mui/x-data-grid";
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles'

import Columns from "./Columns";
import { ThemeProvider } from "@emotion/react";
import { Modal } from "@mui/material";
//import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from "styled-components";


// eslint-disable-next-line import/no-anonymous-default-export
export const UserData = () => {
    const language = createTheme({}, jaJP)

    //画面遷移
    const navigate = useNavigate();

    //userDataの型定義
    type userObject = {
        "id": number,
        "mail": string,
        "age": number,
        "job": string,
        "gender": string,
        "interests": string,
      };

    const [data, setData] = useState<Array<userObject>>([]);//初期データ取得のステート
    const [newData , setNewData] = useState<Array<userObject>>([]);//追加データのステート

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                'http://localhost:3001/users/'
            );

            setData(result.data);
        };

        fetchData();
    }, [newData]);


    //追加ボタンを押すと表示されるデータが空になる（未修正）
    function editToolBar() {

        return (
            <>
            </>

        );
    };

    return (
        <>
            <Button className="addition" variant="contained" color="primary" onClick={() => navigate("/CreateUserData")}>
                + 追加
            </Button>
            <ThemeProvider theme={language}>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={data}
                        columns={Columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        components={{
                            Toolbar: editToolBar,
                        }} />
                </div>
            </ThemeProvider>
        </>
    );
}


//ツールバーの中に書いていた関数たち
/*空のデータを送信するときに使用していたもの
        const handleClick = async () => {
            const newRow = await axios.post<Array<userObject>>('http://localhost:3001/users/', {
                "id": "",
                "user_id": "",
                "mail": "",
                "age": "",
                "gender": "",
                "job": "",
                "interests": [""]
            });
            setNewData(newRow.data);
        };
        */

        //作りかけの削除処理
        /*const deleteUser = React.useCallback(
        (id) => () => {
            setTimeout(() => {
            setData((prevRows) => prevRows.filter((data) => id !== id));
            });
        },
        [],
        );
*/

const ModalBox = styled.div`
    position: absolute;
    padding: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border: 2px solid #000;
    box-shadow: 2px;
`;