# app.py

from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///blog.db'
db = SQLAlchemy(app)

# Define the blog post model
class BlogPost(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.Text, nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'content': self.content
        }

@app.route('/api/blog-posts', methods=['GET'])
def get_blog_posts():
    posts = BlogPost.query.all()
    return jsonify([post.to_dict() for post in posts])

@app.route('/api/contact', methods=['POST'])
def handle_contact_form():
    # Process the form data here
    # ...
    return jsonify({'message': 'Form submitted successfully'})

if __name__ == '__main__':
    app.run(debug=True)