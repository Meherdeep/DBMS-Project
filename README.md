# E-Commerce website
Simple E-Commerce website

#### Run instruction

Install all packages
```
pip install -r requirements.txt
```

Run the server
```
python server.py
```

Server runs at
```
http://localhost:5000/
```

#### Routes

Products
```python
GET Request
URL = 'http://localhost:5000/products'
params = {}

Response
[
    {
        "image": "http://res.cloudinary.com/dnhwxgf8i/image/upload/c_scale,h_250,w_400/v1488011915/mockup3_kxxwfy.jpg", 
        "category": "Tables", 
        "item": "Pearl Galaxy", 
        "price": "$2,100"
    }, 
    {
        "image": "http://res.cloudinary.com/dnhwxgf8i/image/upload/c_scale,h_250,w_400/v1488011915/mockup1_ff4smb.jpg", 
        ...
    }
]
```

#### Contributors
:heart_eyes: [Nishant Rodrigues](https://github.com/nishnash54)
:open_mouth: [Meherdeep](https://github.com/Meherdeep)