from flask import Flask, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///blog.db"
db = SQLAlchemy(app)

class BlogPost(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.Text, nullable=False)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/blog-posts", methods=["GET"])
def get_blog_posts():
    posts = BlogPost.query.all()
    return jsonify([post.to_dict() for post in posts])

@app.route("/api/new-post", methods=["POST"])
def create_new_post():
    title = request.form["title"]
    content = request.form["content"]
    new_post = BlogPost(title=title, content=content)
    db.session.add(new_post)
    db.session.commit()
    return jsonify({"message": "New post created successfully"})

if __name__ == "__main__":
    app.run(debug=True)