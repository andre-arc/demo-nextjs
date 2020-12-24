import {table} from './utils/Airtable'

export default async (req, res) => {
    const { deskripsi } = req.body;

    try{
        const createdRecords = await table.create([{fields: {deskripsi}}]);
        const createdRecord = {
            id: createdRecords[0].id,
            fields: createdRecords[0].fields
        }

        res.statusCode = 200;
        res.json(createdRecord);
    }catch(err){
        res.statusCode = 500;
        res.json({
            status: false,
            msg: "Ada Error"
        });
    }
}