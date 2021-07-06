-- create database gestioncopafutbol;

create table Team(
    IdTeam int unsigned auto_increment,
    NameTeam varchar(80) not null,
    NameCoach varchar(80) default '-',
    Website varchar(90) default '-',
    Prefix varcchar(10) default '-',
    primary key(IdTeam)
);

create table Match(
    IdMatch int unsigned auto_increment,
    DateMatch datetime not null,
    GoalsTeam1 int unsigned not null,
    GoalsTeam2 int unsigned not null,

    primary key(IdMatch)
);

create table Group(
    IdGroup int unsigned auto_increment,
    NameGroup varchar(10) not null,
    primary key(IdGroup)
);

create table FinalRound(
    IdFinalRound int unsigned auto_increment,
    NameInstance enum('round_of_16', 'quarter_finals', 'semifinals', 'math_3rd_place', 'final') not null,
    primary key(IdFinalRound)
);

create table Math_Teams(
    IdMatch int unsigned auto_increment,
    IdTeam1 int unsigned auto_increment,
    IdTeam2 int unsigned auto_increment,
    primary key(IdMatch, IdTeam1, IdTeam2),
    foreign key (IdMatch) references Match(IdMatch),
    foreign key (IdTeam1) references Team(IdTeam),
    foreign key (IdTeam2) references Team(IdTeam)
);

create table Group_Math(
    IdGroup int unsigned auto_increment,
    IdMatch int unsigned auto_increment,
    primary key(IdGroup, IdMatch),
    foreign key (IdMatch) references Match(IdMatch),
    foreign key (IdGroup) references Group(IdGroup)
);

create table Group_Team(
    IdGroup int unsigned auto_increment,
    IdTeam int unsigned auto_increment,
    WonMatches int unsigned not null,
    LostMatches int unsigned not null,
    TiedMatches int unsigned not null,
    PositiveGoals int unsigned not null,
    NegativeGoals int unsigned not null,
    Points int unsigned not null,

    primary key(IdGroup, IdTeam),
    foreign key (IdGroup) references Group(IdGroup),
    foreign key (IdTeam) references Team(IdTeam)
);

create table Match_FinalRound(
    IdFinalRound int unsigned auto_increment,
    IdMath int unsigned auto_increment,

)
