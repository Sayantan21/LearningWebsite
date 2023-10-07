import html_content from './HTML/html'
import css_content from './CSS/css'
import js_content from './JavaScript/javascript'
import react_content from './React/react'
import angular_content from './Angular/angular'



const frontend_content = [{
    "id": 1,
    "content_name": "Frontend-Development",
    "sub_content": [
        ...html_content,
        ...css_content,
        ...js_content,
        ...react_content,
        ...angular_content
    ]
}]

export default frontend_content