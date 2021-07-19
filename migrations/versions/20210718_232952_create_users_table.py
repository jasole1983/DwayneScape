"""create users table

Revision ID: 6168bc1e4c30
Revises: 
Create Date: 2021-07-18 23:29:52.328253

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6168bc1e4c30'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('decks',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=75), nullable=False),
    sa.Column('category', sa.Enum('EarlyLife', 'Movies', 'TV', 'Wrestling', 'Trivia', name='category'), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('cards',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('question', sa.String(length=2000), nullable=False),
    sa.Column('answer', sa.String(length=2000), nullable=False),
    sa.Column('rating', sa.Integer(), nullable=True),
    sa.Column('deckId', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['deckId'], ['decks.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('cards')
    op.drop_table('decks')
    op.drop_table('users')
    # ### end Alembic commands ###