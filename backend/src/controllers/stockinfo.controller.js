import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/AprError.js";

import { Stock } from "../models/stockinfo.model.js"

const getStocksData = asyncHandler(async (req, res)=>{
    const data = await Stock.find();
    console.log(data.length)
    if(data.length === 0){
        fetch("https://api.wazirx.com/api/v2/tickers")
        .then(response => response.json())
        .then( async(res) => {
            const arr = Object.keys(res);
            arr.slice(0,10).forEach(async (key) => {
                const stock = new Stock({
                    name: res[key].name,
                    last: res[key].last,
                    buy: res[key].buy,
                    sell: res[key].sell,
                    volume: res[key].volume,
                    base_unit: res[key].base_unit
                });
                // console.log(stock);
                await stock.save();
            });
        })
        .catch(err => console.log(err.message));
    }

    const addedData = await Stock.find()
    if(!addedData){
        return res
            .status(400)
            .json(
                    new ApiError(500,{}, "Server Error!")
            )
    }

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                addedData,
                "Successfully fetched data..!"
            )
        )
})

export {
    getStocksData
}