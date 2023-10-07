import node_content from './Node/node'
import python_content from './Python/python'
import express_content from './Express/expressjs'
import flask_content from './Flask/flask'
import java_content from './Java/java'
import spring_content from './Spring_boot/spring_boot'
import php_content from './PHP/php'
import django_content from './Django/django'



const backend_content = [
    {
        "id": 2,
        "content_name": "Backend-Development",
        "sub_content":[
            ...node_content,
            ...express_content,
            ...python_content,
            ...django_content,
            ...flask_content,
            ...java_content,
            ...spring_content,
            ...php_content,
        ]
    }
]

export default backend_content