-- CreateTable
CREATE TABLE "User" (
    "username" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "position" TEXT NOT NULL DEFAULT 'student'
);

-- CreateTable
CREATE TABLE "OperationSequence" (
    "operationId" TEXT NOT NULL PRIMARY KEY,
    "page" TEXT NOT NULL,
    "module" TEXT NOT NULL,
    "widget" TEXT NOT NULL,
    "startTimeTick" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "BlueClickCount" (
    "clickId" TEXT NOT NULL PRIMARY KEY,
    "enterTick" TEXT NOT NULL,
    "widget" TEXT NOT NULL,
    "count" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Messages" (
    "messageId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ownerName" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "courseName" TEXT NOT NULL,
    "assignmentName" TEXT NOT NULL,
    CONSTRAINT "Messages_ownerName_fkey" FOREIGN KEY ("ownerName") REFERENCES "User" ("username") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Courses" (
    "courseName" TEXT NOT NULL PRIMARY KEY,
    "teacherName" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Assignments" (
    "assignmentName" TEXT NOT NULL,
    "assignmentId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "visibleRange" TEXT NOT NULL DEFAULT 'Public',
    "theCourseName" TEXT NOT NULL,
    "ownerName" TEXT NOT NULL,
    CONSTRAINT "Assignments_theCourseName_fkey" FOREIGN KEY ("theCourseName") REFERENCES "Courses" ("courseName") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Assignments_ownerName_fkey" FOREIGN KEY ("ownerName") REFERENCES "User" ("username") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Courseware" (
    "coursewareName" TEXT NOT NULL,
    "coursewareId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "theCourseName" TEXT NOT NULL,
    CONSTRAINT "Courseware_theCourseName_fkey" FOREIGN KEY ("theCourseName") REFERENCES "Courses" ("courseName") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "StudentsOnCourses" (
    "username" TEXT NOT NULL,
    "courseName" TEXT NOT NULL,

    PRIMARY KEY ("username", "courseName"),
    CONSTRAINT "StudentsOnCourses_username_fkey" FOREIGN KEY ("username") REFERENCES "User" ("username") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "StudentsOnCourses_courseName_fkey" FOREIGN KEY ("courseName") REFERENCES "Courses" ("courseName") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "OperationSequence_operationId_key" ON "OperationSequence"("operationId");

-- CreateIndex
CREATE UNIQUE INDEX "BlueClickCount_clickId_key" ON "BlueClickCount"("clickId");

-- CreateIndex
CREATE UNIQUE INDEX "Messages_messageId_key" ON "Messages"("messageId");

-- CreateIndex
CREATE UNIQUE INDEX "Courses_courseName_key" ON "Courses"("courseName");

-- CreateIndex
CREATE UNIQUE INDEX "Assignments_assignmentName_key" ON "Assignments"("assignmentName");
