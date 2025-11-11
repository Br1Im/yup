from fastapi import FastAPI, HTTPException, Depends, status
from datetime import datetime, timedelta, timezone
from typing import Annotated, Union
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import JWTError, jwt
from passlib.context import CryptContext
from pydantic import BaseModel

