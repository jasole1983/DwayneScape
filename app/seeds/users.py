from app.models import db, User, Deck, Card


# Adds a demo user, you can add other users here if you want

def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password')
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password')

    defaultUser = User(
        username='defaultUser', email='default@email.com', password='!4mD3f4U17')

    WD1 = Deck(
        title="Wrestling Deck 1", category="Wrestling", user=defaultUser,
    )

    WD_1_1 = Card(
        question="How many Stage Names did Dwayne Johnson perform under? List them",
        answer="3; Flex Kavana, Rocky Maivia, The Rock",
        deck=WD1
    )
    WD_1_2 = Card(
        question="What year did 'The Rock' make his WWF debut?",
        answer="1996 as Rocky Maivia",
        deck=WD1
    )
    WD_1_3 = Card(
        question="When did Rocky Maivia become 'The Rock'?",
        answer="1997 Rocky turned 'heel' and began refering to himself in the third person",
        deck=WD1
    )
    WD_1_4 = Card(
        question="What was the first championship belt won by DJ, and who did he defeat to win it?",
        answer="Feb 13, 1997 he won the InterContinental Championship from Hunter Hearst Helmsly aka 'Triple-H'",
        deck=WD1
    )
    WD_1_5 = Card(
        question="Name 'The Rock's 2 main signature moves",
        answer="The RockBottom and The People's Elbow",
        deck=WD1
    )
    WD_1_6 = Card(
        question="What records does 'The Rock' solely hold in regards to WWF broadcasts?",
        answer="Most Raw shows main-evented in one year, most SmackDown shows main-evented in one year",
        deck=WD1
    )
    WD_1_7 = Card(
        question="What show gets its name directly from 'The Rock's rhetoric?",
        answer="SmackDown, from his 'lay the smackdown' phrase",
        deck=WD1
    )
    WD_1_8 = Card(
        question="Who did 'The Rock' defeat to win his first WWF Championship?",
        answer="Mankind",
        deck=WD1
    )
    WD_1_9 = Card(
        question="What was the name of the group of heals headed by Vince McMahon that 'The Rock' was a part of early on?",
        answer="The Corporation",
        deck=WD1
    )
    WD_1_10 = Card(
        question="Which event main-evented by 'The Rock' was the most bought pay-per-view worldwide in WWE history?",
        answer="WrestleMania XXVIII",
        deck=WD1
    )

    ELD1 = Deck(
        title="Early Life Deck 1", category="Early-Life", user=defaultUser,
    )

    EL_1_1 = Card(
        question="Where was DTRJ born?",
        answer="Hayward, California",
        deck=ELD1
    )

    EL_1_2 = Card(
        question="DTRJ's mother's name",
        answer="Ata Johnson",
        deck=ELD1
    )

    EL_1_3 = Card(
        question="DTRJ's father's name",
        answer="Rocky Johnson (born Wayde Douglas Bowles)",
        deck=ELD1
    )

    EL_1_4 = Card(
        question="DTRJ's grandfather's name (on his mother's side)",
        answer="Peter Maivia",
        deck=ELD1
    )

    EL_1_5 = Card(
        question="According to his own words, how many times was DTRJ arrested as a teenager?",
        answer="8 or 9",
        deck=ELD1
    )

    EL_1_6 = Card(
        question="Where did DTRJ go to college?",
        answer="The University of Miami",
        deck=ELD1
    )

    EL_1_7 = Card(
        question="Who replaced DTRJ on the Miami Hurricanes football team after he suffered an injury",
        answer="Warren Sapp",
        deck=ELD1
    )

    EL_1_8 = Card(
        question="What professional football team did DTRJ sign with?",
        answer="Calgary Stampeders",
        deck=ELD1
    )

    EL_1_9 = Card(
        question="Where was DTRJ's father born?",
        answer="Nova Scotia",
        deck=ELD1
    )

    EL_1_10 = Card(
        question="Where was DTRJ's mother born?",
        answer="American Samoa",
        deck=ELD1
    )

    MV1 = Deck(
        title="Movie Deck 1", category="Movies", user=defaultUser
    )

    MV_1_1 = Card(
        question="Name the first movie DTRJ acted in",
        answer="The Mummy 2",
        deck=MV1
    )

    MV_1_2 = Card(
        question="The first movie that DTRJ starred in",
        answer="The Scorpion King",
        deck=MV1
    )

    MV_1_3 = Card(
        question="DTRJ starred in this movie about a mythical creature who trades in Teeth",
        answer="The Tooth Fairy",
        deck=MV1
    )

    MV_1_4 = Card(
        question="What movie franchise about driving cars is DTRJ credited with rejuvenating?",
        answer="Fast and Furious",
        deck=MV1
    )

    MV_1_5 = Card(
        question="What hit animated Disney movie about a SeaFaring princess was DTRJ a star in, and what role did he play?",
        answer="Moana, Maui - demigod",
        deck=MV1
    )

    MV_1_6 = Card(
        question="This movie, based on a true story, about incarcerated highschool age boys starting a football program",
        answer="True Grit",
        deck=MV1
    )

    MV_1_7 = Card(
        question="This remake of a 1973 movie was set in Eastern Washington and co-starred Johnny Knoxville",
        answer="Walking Tall",
        deck=MV1
    )

    MV_1_8 = Card(
        question="This reboot of a 20 year old franchise about a group of kids getting caught in a game",
        answer="Jumanji",
        deck=MV1
    )

    MV_1_9 = Card(
        question="DTRJ had a supporting role as Elliot Wilhelm, a gay bodyguard, in this sequel to the movie 'Get Shorty'",
        answer="Be Cool",
        deck=MV1
    )

    MV_1_10 = Card(
        question="Once a cartoon in the 1980s, this 2013 movie attempted to bring back the legends who thwarted Cobra's evil plans weekly",
        answer="G.I.Joe: Retaliation",
        deck=MV1
    )


    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(defaultUser)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
