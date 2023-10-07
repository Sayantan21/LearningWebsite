import html_logo from '../../../topic_image/html.png'

// content image
// html images
import html_1 from './html_images/html_1.png'
import html_head from './html_images/html_tag_2_head.png'
import html_body_input from './html_images/html_tag_3_body_input.png'
import html_body_output from './html_images/html_tag_3_body_output.png'
import html_heading_input from './html_images/html_tag_4_heading_tags_input.png'
import html_heading_output from './html_images/html_tag_4_heading_tags_output.png'
import html_p_input from './html_images/html_tag_5_p_tags_input.png'
import html_p_output from './html_images/html_tag_5_p_tags_output.png'
import html_a_input from './html_images/html_tag_6_a_tags_input.png'
import html_a_output from './html_images/html_tag_6_a_tags_output.png'
import html_ul_ol_input from './html_images/html_tag_7_ol_ul_tags_input.png'
import html_ul_ol_output from './html_images/html_tag_7_ol_ul_tags_output.png'
import html_image_input from './html_images/html_tag_8_image_tags_input.png'
import html_image_output from './html_images/html_tag_8_image_tags_output.png'
import html_div_input from './html_images/html_tag_9_div_tags_input.png'
import html_div_output from './html_images/html_tag_9_div_tags_output.png'
import html_span_input from './html_images/html_tag_10_span_tags_input.png'
import html_span_output from './html_images/html_tag_10_span_tags_output.png'


const html_content = [
    {
        "id": 1,
        "sub_content_name": "HTML",
        "description": "",
        "logo": html_logo,
        "content": [
            {
                "id": 1,
                "question": "What is HTML?",
                "answer": `HTML, which stands for <b>HyperText Markup Language</b>, is the standard markup language used to create web pages. It is the backbone of web content and is used to structure the content on a web page, such as text, images, links, forms, and multimedia elements like videos and audio. HTML provides a way to define the structure and presentation of web documents, including headings, paragraphs, lists, tables, and more.
                <br>
                <br>
                <p><b>Here is basic HTML structure</b></p>`,
                "answer_link": "",
                "code_snippet": [
                    {
                        "id":1,
                        "answer":"",
                        "input_image":html_1,
                        "output_image":""
                    }
                ]
            },
            {
                "id": 2,
                "question": "What are Tags?",
                "answer": `Tags are used in HTML (Hypertext Markup Language) to specify and organize the content of a web page. Angle brackets enclose HTML tags, which are typically used in pairs—an opening tag and a closing tag. The element's name appears in both the opening and closing tags. The closing tag's name is followed by a forward slash (/). Together, tags surround and describe the information to which they are applied.
                <br> <br>
                <p><b>Here are some common HTML tags along with examples:</b></p>
                <br>`,
                "answer_link": "",
                "code_snippet": [
                    {
                        "id":1,
                        "answer":"(i) html: The root element that encapsulates the entire HTML document.",
                        "input_image":html_1,
                        "output_image":""
                    },
                    {
                        "id":2,
                        "answer":"(ii) head: Contains meta-information about the document, such as the title, character encoding, and links to external resources.",
                        "input_image":html_head,
                        "output_image":""
                    },
                    {
                        "id":3,
                        "answer":"(iii) body: Contains the main content of the web page that is visible to users.",
                        "input_image":html_body_input,
                        "output_image":html_body_output
                    },
                    {
                        "id":4,
                        "answer":"(iv) h1, h2, h3, etc.: Used to define headings with different levels of importance.",
                        "input_image":html_heading_input,
                        "output_image":html_heading_output
                    },
                    {
                        "id":5,
                        "answer":"(v) p: Represents a paragraph of text.",
                        "input_image":html_p_input,
                        "output_image":html_p_output
                    },
                    {
                        "id":6,
                        "answer":"(vi) a: Defines hyperlinks to other web pages or resources.",
                        "input_image":html_a_input,
                        "output_image":html_a_output
                    },
                    {
                        "id":7,
                        "answer":"(vii) ul, ol, li: Used to create unordered lists (bulleted), ordered lists (numbered), and list items, respectively.",
                        "input_image":html_ul_ol_input,
                        "output_image":html_ul_ol_output
                    },
                    {
                        "id":8,
                        "answer":"(viii) img: Embeds images in the web page.",
                        "input_image":html_image_input,
                        "output_image":html_image_output
                    },
                    {
                        "id":9,
                        "answer":"(xi) div: A generic container for grouping and styling elements.",
                        "input_image":html_div_input,
                        "output_image":html_div_output
                    },
                    {
                        "id":10,
                        "answer":"(x) span: A generic inline container often used for styling individual pieces of text.",
                        "input_image":html_span_input,
                        "output_image":html_span_output
                    },
                ]
            },
            {
                "id": 3,
                "question": "What are HTML Attributes?",
                "answer": `<p>HTML attributes are extra bits of data you can include with HTML elements to provide more information or specifics about certain elements. These properties are used to change an HTML element's behavior, appearance, or functionality and are normally supplied in the opening tag of the element. The name of the attribute indicates what it does, while the value of the attribute offers the exact data or setting for that attribute. Attributes are usually written as name-value pairs.</p><br>
                <p><b>Here are some common HTML tags along with examples:</b></p>`,
                "answer_link": "",
                "code_snippet": [
                    {
                        "id":1,
                        "answer":"(i) id: Used to uniquely identify an element on a web page. Each id attribute value must be unique within the page.",
                        "input_image":html_1,
                        "output_image":html_1
                    },
                    {
                        "id":2,
                        "answer":"(ii) class: Assigns one or more CSS classes to an element, allowing you to apply styles and formatting to multiple elements with the same class.",
                        "input_image":html_1,
                        "output_image":html_1
                    },
                    {
                        "id":3,
                        "answer":"(iii) src: Specifies the source URL of external resources such as images, audio, video, or scripts.",
                        "input_image":html_1,
                        "output_image":html_1
                    },
                    {
                        "id":4,
                        "answer":"(iv) href: Used in anchor (<a>) elements to specify the URL of the linked page.",
                        "input_image":html_1,
                        "output_image":html_1
                    },
                    {
                        "id":5,
                        "answer":"(v) alt: Provides alternative text for images, which is displayed if the image cannot be loaded or for accessibility purposes.",
                        "input_image":html_1,
                        "output_image":html_1
                    },
                    {
                        "id":6,
                        "answer":"(vi) width and height: Sets the width and height of elements like images and table cells.",
                        "input_image":html_1,
                        "output_image":html_1
                    },
                    {
                        "id":7,
                        "answer":"(vii) style: Allows you to specify inline CSS styles for an element.",
                        "input_image":html_1,
                        "output_image":html_1
                    },
                    {
                        "id":8,
                        "answer":"(viii) data-*: Custom attributes that can be used to store data associated with an element. These attributes don't affect the element's appearance or behavior by default but can be accessed and manipulated using JavaScript.",
                        "input_image":html_1,
                        "output_image":html_1
                    },
                    {
                        "id":9,
                        "answer":"(ix) target: Used in anchor (<a>) elements to specify where the linked content should be opened (e.g., in a new window or tab).",
                        "input_image":html_1,
                        "output_image":html_1
                    },
                ]
            },
            {
                "id": 4,
                "question": "What are HTML Attributes?",
                "answer": `<p>HTML attributes are extra bits of data you can include with HTML elements to provide more information or specifics about certain elements. These properties are used to change an HTML element's behavior, appearance, or functionality and are normally supplied in the opening tag of the element. The name of the attribute indicates what it does, while the value of the attribute offers the exact data or setting for that attribute. Attributes are usually written as name-value pairs.</p><br>
                <p><b>Here are some common HTML tags along with examples:</b></p>`,
                "answer_link": "",
                "code_snippet": [
                    {
                        "id":1,
                        "answer":"(i) id: Used to uniquely identify an element on a web page. Each id attribute value must be unique within the page.",
                        "input_image":html_1,
                        "output_image":html_1
                    },
                    {
                        "id":2,
                        "answer":"(ii) class: Assigns one or more CSS classes to an element, allowing you to apply styles and formatting to multiple elements with the same class.",
                        "input_image":html_1,
                        "output_image":html_1
                    },
                    {
                        "id":3,
                        "answer":"(iii) src: Specifies the source URL of external resources such as images, audio, video, or scripts.",
                        "input_image":html_1,
                        "output_image":html_1
                    },
                    {
                        "id":4,
                        "answer":"(iv) href: Used in anchor (<a>) elements to specify the URL of the linked page.",
                        "input_image":html_1,
                        "output_image":html_1
                    },
                    {
                        "id":5,
                        "answer":"(v) alt: Provides alternative text for images, which is displayed if the image cannot be loaded or for accessibility purposes.",
                        "input_image":html_1,
                        "output_image":html_1
                    },
                    {
                        "id":6,
                        "answer":"(vi) width and height: Sets the width and height of elements like images and table cells.",
                        "input_image":html_1,
                        "output_image":html_1
                    },
                    {
                        "id":7,
                        "answer":"(vii) style: Allows you to specify inline CSS styles for an element.",
                        "input_image":html_1,
                        "output_image":html_1
                    },
                    {
                        "id":8,
                        "answer":"(viii) data-*: Custom attributes that can be used to store data associated with an element. These attributes don't affect the element's appearance or behavior by default but can be accessed and manipulated using JavaScript.",
                        "input_image":html_1,
                        "output_image":html_1
                    },
                    {
                        "id":9,
                        "answer":"(ix) target: Used in anchor (<a>) elements to specify where the linked content should be opened (e.g., in a new window or tab).",
                        "input_image":html_1,
                        "output_image":html_1
                    },
                ]
            },
            {
                "id": 5,
                "question": "What are HTML Attributes?",
                "answer": `<p>HTML attributes are extra bits of data you can include with HTML elements to provide more information or specifics about certain elements. These properties are used to change an HTML element's behavior, appearance, or functionality and are normally supplied in the opening tag of the element. The name of the attribute indicates what it does, while the value of the attribute offers the exact data or setting for that attribute. Attributes are usually written as name-value pairs.</p><br>
                <p><b>Here are some common HTML tags along with examples:</b></p>`,
                "answer_link": "",
                "code_snippet": [
                    {
                        "id":1,
                        "answer":"(i) id: Used to uniquely identify an element on a web page. Each id attribute value must be unique within the page.",
                        "input_image":html_1,
                        "output_image":html_1
                    },
                    {
                        "id":2,
                        "answer":"(ii) class: Assigns one or more CSS classes to an element, allowing you to apply styles and formatting to multiple elements with the same class.",
                        "input_image":html_1,
                        "output_image":html_1
                    },
                    {
                        "id":3,
                        "answer":"(iii) src: Specifies the source URL of external resources such as images, audio, video, or scripts.",
                        "input_image":html_1,
                        "output_image":html_1
                    },
                    {
                        "id":4,
                        "answer":"(iv) href: Used in anchor (<a>) elements to specify the URL of the linked page.",
                        "input_image":html_1,
                        "output_image":html_1
                    },
                    {
                        "id":5,
                        "answer":"(v) alt: Provides alternative text for images, which is displayed if the image cannot be loaded or for accessibility purposes.",
                        "input_image":html_1,
                        "output_image":html_1
                    },
                    {
                        "id":6,
                        "answer":"(vi) width and height: Sets the width and height of elements like images and table cells.",
                        "input_image":html_1,
                        "output_image":html_1
                    },
                    {
                        "id":7,
                        "answer":"(vii) style: Allows you to specify inline CSS styles for an element.",
                        "input_image":html_1,
                        "output_image":html_1
                    },
                    {
                        "id":8,
                        "answer":"(viii) data-*: Custom attributes that can be used to store data associated with an element. These attributes don't affect the element's appearance or behavior by default but can be accessed and manipulated using JavaScript.",
                        "input_image":html_1,
                        "output_image":html_1
                    },
                    {
                        "id":9,
                        "answer":"(ix) target: Used in anchor (<a>) elements to specify where the linked content should be opened (e.g., in a new window or tab).",
                        "input_image":html_1,
                        "output_image":html_1
                    },
                ]
            },
            {
                "id": 6,
                "question": "What are HTML Attributes?",
                "answer": `<p>HTML attributes are extra bits of data you can include with HTML elements to provide more information or specifics about certain elements. These properties are used to change an HTML element's behavior, appearance, or functionality and are normally supplied in the opening tag of the element. The name of the attribute indicates what it does, while the value of the attribute offers the exact data or setting for that attribute. Attributes are usually written as name-value pairs.</p><br>
                <p><b>Here are some common HTML tags along with examples:</b></p>`,
                "answer_link": "",
                "code_snippet": [
                    {
                        "id":1,
                        "answer":"(i) id: Used to uniquely identify an element on a web page. Each id attribute value must be unique within the page.",
                        "input_image":html_1,
                        "output_image":html_1
                    },
                    {
                        "id":2,
                        "answer":"(ii) class: Assigns one or more CSS classes to an element, allowing you to apply styles and formatting to multiple elements with the same class.",
                        "input_image":html_1,
                        "output_image":html_1
                    },
                    {
                        "id":3,
                        "answer":"(iii) src: Specifies the source URL of external resources such as images, audio, video, or scripts.",
                        "input_image":html_1,
                        "output_image":html_1
                    },
                    {
                        "id":4,
                        "answer":"(iv) href: Used in anchor (<a>) elements to specify the URL of the linked page.",
                        "input_image":html_1,
                        "output_image":html_1
                    },
                    {
                        "id":5,
                        "answer":"(v) alt: Provides alternative text for images, which is displayed if the image cannot be loaded or for accessibility purposes.",
                        "input_image":html_1,
                        "output_image":html_1
                    },
                    {
                        "id":6,
                        "answer":"(vi) width and height: Sets the width and height of elements like images and table cells.",
                        "input_image":html_1,
                        "output_image":html_1
                    },
                    {
                        "id":7,
                        "answer":"(vii) style: Allows you to specify inline CSS styles for an element.",
                        "input_image":html_1,
                        "output_image":html_1
                    },
                    {
                        "id":8,
                        "answer":"(viii) data-*: Custom attributes that can be used to store data associated with an element. These attributes don't affect the element's appearance or behavior by default but can be accessed and manipulated using JavaScript.",
                        "input_image":html_1,
                        "output_image":html_1
                    },
                    {
                        "id":9,
                        "answer":"(ix) target: Used in anchor (<a>) elements to specify where the linked content should be opened (e.g., in a new window or tab).",
                        "input_image":html_1,
                        "output_image":html_1
                    },
                ]
            },
        ]
    }
]

export default html_content