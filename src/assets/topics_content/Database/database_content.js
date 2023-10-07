import dbms_content from "./DBMS/dbms_content"
import mongodb_content from "./Mongodb/mongodb"
import sql_content from "./SQL/sql"

const database_content = [{
    "id": 5,
    "content_name": "Database",
    "sub_content": [
        ...dbms_content,
        ...sql_content,
        ...mongodb_content,
    ]
}]

export default database_content