'''
Database tables Classes are defined here
'''
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Text
from sqlalchemy.dialects.mysql import LONGTEXT
from sqlalchemy.orm import relationship

from database import Base


class Word(Base):
    __tablename__ = "word"

    name = Column(String(50),  primary_key=True)
    type = Column(String(10))

    __table_args__ = {
        'mysql_charset': 'utf8mb4',
        'mysql_collate': 'utf8mb4_bin'
    }


class Article(Base):
    __tablename__ = "article"

    word = Column(String(50), ForeignKey("word.name", ondelete='CASCADE', onupdate='CASCADE'), primary_key=True, nullable=False)
    description = Column(Text)

    __table_args__ = {
        'mysql_charset': 'utf8mb4',
        'mysql_collate': 'utf8mb4_bin'
    }



class Vocabulary(Base):
    __tablename__ = "vocabulary"

    word = Column(String(50), ForeignKey("word.name", ondelete='CASCADE', onupdate='CASCADE'), primary_key=True, nullable=False)
    data = Column(LONGTEXT)


    __table_args__ = {
        'mysql_charset': 'utf8mb4',
        'mysql_collate': 'utf8mb4_bin'
    }


# 现在在所有类定义完成后，定义 relationship
Word.articles = relationship("Article", back_populates="word_ref", cascade="all, delete-orphan")
Word.vocabularies = relationship("Vocabulary", back_populates="word_ref", cascade="all, delete-orphan")

Article.word_ref = relationship("Word", back_populates="articles")
Vocabulary.word_ref = relationship("Word", back_populates="vocabularies")

# database table
# class User(Base):
#     __tablename__ = "users"

#     id = Column(Integer, primary_key=True, index=True)
#     name = Column(String(100), nullable=False, index=True)
#     email = Column(String(100), nullable=False, unique=True, index=True)
#     address = Column(String(100), nullable=False)
#     hashed_password = Column(String(100), nullable=False)
#     is_active = Column(Boolean, default=True)
#     items = relationship("Item", back_populates="owner")

# # database table
# class Item(Base):
#     __tablename__ = "items"

#     id = Column(Integer, primary_key=True, index=True)
#     title = Column(String(100), nullable=False, index=True)
#     description = Column(String(100), nullable=False, index=True)
#     owner_id = Column(Integer, ForeignKey("users.id", ondelete='CASCADE', onupdate='CASCADE'), nullable=False)
#     owner = relationship("User", back_populates="items")
