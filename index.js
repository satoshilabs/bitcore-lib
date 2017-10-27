'use strict';

var btcLib = {};
var owsCommon = require('@owstack/ows-common');

// module information
btcLib.version = 'v' + require('./package.json').version;

// crypto
btcLib.crypto = {};
btcLib.crypto.BN = owsCommon.crypto.BN;
btcLib.crypto.ECDSA = require('./lib/crypto/ecdsa');
btcLib.crypto.Hash = owsCommon.crypto.Hash;
btcLib.crypto.Random = owsCommon.crypto.Random;
btcLib.crypto.Point = require('./lib/crypto/point');
btcLib.crypto.Signature = require('./lib/crypto/signature');

// encoding
btcLib.encoding = {};
btcLib.encoding.Base58 = owsCommon.encoding.Base58;
btcLib.encoding.Base58Check = owsCommon.encoding.Base58Check;
btcLib.encoding.BufferReader = owsCommon.encoding.BufferReader;
btcLib.encoding.BufferWriter = owsCommon.encoding.BufferWriter;
btcLib.encoding.Varint = owsCommon.encoding.Varint;

// utilities
btcLib.util = {};
btcLib.util.buffer = owsCommon.util.buffer;
btcLib.util.js = owsCommon.util.js;
btcLib.util.preconditions = owsCommon.util.preconditions;

// errors thrown by the library
btcLib.errors = owsCommon.errors;

// main bitcoin library
btcLib.Address = require('./lib/address');
btcLib.Block = require('./lib/block');
btcLib.MerkleBlock = require('./lib/block/merkleblock');
btcLib.BlockHeader = require('./lib/block/blockheader');
btcLib.HDPrivateKey = require('./lib/hdprivatekey.js');
btcLib.HDPublicKey = require('./lib/hdpublickey.js');
btcLib.Networks = require('./lib/networks');
btcLib.Opcode = require('./lib/opcode');
btcLib.PrivateKey = require('./lib/privatekey');
btcLib.PublicKey = require('./lib/publickey');
btcLib.Script = require('./lib/script');
btcLib.Transaction = require('./lib/transaction');
btcLib.URI = require('./lib/uri');
btcLib.Unit = require('./lib/unit');

// dependencies, subject to change
btcLib.deps = {};
btcLib.deps.bnjs = require('bn.js');
btcLib.deps.bs58 = require('bs58');
btcLib.deps.Buffer = Buffer;
btcLib.deps.elliptic = require('elliptic');
btcLib.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
btcLib.Transaction.sighash = require('./lib/transaction/sighash');

module.exports = btcLib;
