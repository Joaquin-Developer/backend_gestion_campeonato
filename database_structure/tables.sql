create table TournamentData(
    IdTournament int unsigned auto_increment,
    NameTournament varchar(150) not null,
    primary key(IdTournament)
);

create table Team(
    IdTeam int unsigned auto_increment,
    NameTeam varchar(80) not null,
    NameCoach varchar(80) default '-',
    Website varchar(90) default '-',
    Prefix varcchar(10) default '-',
    primary key(IdTeam)
);

create table Game(
    IdGame int unsigned auto_increment,
    DateGame datetime not null,
    GoalsTeam1 int unsigned not null,
    GoalsTeam2 int unsigned not null,
    primary key(IdGame)
);

create table Serie(
    IdSerie int unsigned auto_increment,
    NameSerie varchar(10) not null,
    primary key(IdSerie)
);

create table FinalRound(
    IdFinalRound int unsigned auto_increment,
    NameInstance enum('round_of_16', 'quarter_finals', 'semifinals', 'math_3rd_place', 'final') not null,
    primary key(IdFinalRound)
);

create table Game_Teams(
    IdGame int unsigned,
    IdTeam1 int unsigned,
    IdTeam2 int unsigned,
    primary key(IdGame, IdTeam1, IdTeam2),
    foreign key(IdGame) references Game(IdGame),
    foreign key(IdTeam1) references Team(IdTeam),
    foreign key(IdTeam2) references Team(IdTeam)
);

create table Serie_Game(
    IdSerie int unsigned,
    IdGame int unsigned,
    primary key(IdSerie, IdGame),
    foreign key(IdGame) references Game(IdGame),
    foreign key(IdSerie) references Serie(IdSerie)
);

create table Serie_Team(
    IdSerie int unsigned,
    IdTeam int unsigned,
    WonGames int unsigned not null,
    LostGames int unsigned not null,
    TiedGames int unsigned not null,
    PositiveGoals int unsigned not null,
    NegativeGoals int unsigned not null,
    Points int unsigned not null,
    primary key(IdSerie, IdTeam),
    foreign key(IdSerie) references Serie(IdSerie),
    foreign key(IdTeam) references Team(IdTeam)
);

create table Game_FinalRound(
    IdFinalRound int unsigned,
    IdGame int unsigned,
    primary key(IdFinalRound, IdGame),
    foreign key(IdFinalRound) references FinalRound(IdFinalRound),
    foreign key(IdGame) references Game(IdGame)
);

create table xd()


